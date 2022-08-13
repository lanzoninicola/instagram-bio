interface VideoProps {
  src: string;
}

export default function Video({ src }: VideoProps) {
  return <video src={src} autoPlay muted loop className="max-w-full"></video>;
}
