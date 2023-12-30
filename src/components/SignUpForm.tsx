import * as React from 'react';
import axios from 'axios';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthContext } from '@/Providers/AuthProvider';
import Swal from 'sweetalert2';
import { UserCredential } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const { createUser, signUpWithGoogle } = React.useContext(AuthContext)!;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const navacation = useNavigate();

  async function handleCreateUser(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target as HTMLFormElement;

    const name: string = (form.name as unknown as HTMLInputElement).value;
    const email: string = form.email.value;
    const password: string = form.password.value;
    const confirmPassword: string = form.confirmPassword.value;
    const img: FileList | null = form.img.files;
    const apiKey = import.meta.env.VITE_imageBB;

    if (password !== confirmPassword) {
      setError('Password and Confirm password not match!');
      setIsLoading(false);
      return;
    }

    // Upload image to ImageBB
    if (img && img.length > 0) {
      const formData = new FormData();
      formData.append('key', apiKey);
      formData.append('image', img[0]);

      try {
        const response = await axios.post(
          'https://api.imgbb.com/1/upload',
          formData
        );
        const imageUrl = response.data.data.url;

        if (name && email && imageUrl) {
          const user = {
            name: name,
            email: email,
            img: imageUrl,
          };

          axios.post('http://localhost:5000/users', user);

          createUser(email, password)
            .then((res) => {
              console.log('Create Successfully', res);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500,
              });
              navacation('/');
            })
            .catch((error) => {
              console.error('User creation failed:', error);
              setError('User creation failed');
            })
            .finally(() => {
              setIsLoading(false);
            });
        }
      } catch (error) {
        setError('Image upload failed!');
        console.error('Image upload failed:', error);
        setIsLoading(false);
      }
    }

    form.reset();
  }

  const handleGoogleLogin = () => {
    setIsLoading(true);

    signUpWithGoogle()
      .then((res: UserCredential) => {
        console.log(res.user);
        const info = res.user;

        if (info) {
          const user = {
            name: info.displayName,
            email: info.email,
            img: info.photoURL,
          };
          axios.post('http://localhost:5000/users', user);

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          navacation('/');
        }
      })
      .catch((error) => {
        console.error('Google login failed:', error);
        setError('Google login failed');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <p className="text-xl font-bold text-red-600">{error}</p>
      <form onSubmit={handleCreateUser}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="MD.Kamrul Hasan"
              type="name"
              autoCapitalize="none"
              name="name"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              name="email"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              name="password"
              disabled={isLoading}
              required
            />

            <Input
              id="confirmPassword"
              placeholder="confirm password"
              type="password"
              name="confirmPassword"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
            />

            <p>Profile Pic</p>
            <input
              type="file"
              name="img"
              id="img"
              placeholder="Profile Pic"
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <p>loading</p>}
            Create Account
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        onClick={handleGoogleLogin}
        className="btn border-4 text-black font-bold text-xl shadow-md"
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? <p>loading</p> : <p>Google</p>}
      </Button>
    </div>
  );
}
