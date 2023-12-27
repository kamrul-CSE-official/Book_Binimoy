export default function Profile() {
  return (
    <div className="mt-10 p-4 shadow-lg max-w-md">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src="https://placekitten.com/200/200"
        alt="Profile"
      />
      <h1 className="text-2xl font-bold text-center mt-4">John Doe</h1>
      <div className="mt-4">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  );
}
