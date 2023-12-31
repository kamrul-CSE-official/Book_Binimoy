import { SignupForm } from '../components/SignUpForm';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Signup() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="absolute top-0 right-0 w-full lg:w-1/2">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-white bg-blue-400 font-bold px-5 py-3 rounded-lg border-black"
            >
              Home
            </Link>
            <Link
              className="text-white bg-blue-400 font-bold px-5 py-3 rounded-lg border-black"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
        {/* <Link
          to="/login"
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'sm' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Login
        </Link> */}

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                'url(https://www.cam.ac.uk/sites/www.cam.ac.uk/files/news/research/features/261017old-book-wall-credit-motilal-books.jpg)',
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img className="h-8" src={logo} alt="" />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2"></blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <SignupForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                to="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
