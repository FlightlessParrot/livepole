import HamburgerMenu from "./hamburger_menu";
export default function Main() {
  return (
    <>
      <HamburgerMenu />
      <div id="video-div">
        <video autoPlay="autoplay" muted="muted" loop="loop">
          <source src="/images/movies/boat.mp4" type="video/mp4"></source>
        </video>
        <img src='/images/loga/logo_tackle.png' />
      </div>
    </>
  );
}
