import videoBanner from "../banner.mp4";

export function Banner() {
  return (
    <div className="hidden md:block md:w-1/2">
      <video
        src={videoBanner}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover"
      />
    </div>
  );
}