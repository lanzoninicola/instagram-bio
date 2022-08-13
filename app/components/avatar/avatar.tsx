// TODO: loader image transition when low speed connection
//https://stackoverflow.com/questions/5057990/how-can-i-check-if-a-background-image-is-loaded

export default function Avatar() {
  return (
    <div className="bg-avatar bg-right bg-no-repeat h-400 w-screen -ml-24 relative">
      <div className="absolute inset-0 bg-avatar-overlay"></div>
    </div>
  );
}
