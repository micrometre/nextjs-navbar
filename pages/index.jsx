export function Hamberger() {
  return <>
    <div className="hamburger">
      <div className="burger burger2" />
      <div className="burger burger1" />
      <div className="burger burger3" />
    </div>
    <style jsx>{`

          .hamburger{
            margin: 0rem ;
            width: 2rem;
            background-color: red;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 10;
          }
          .burger{
            width: 2rem;
            height: 0.25rem;
            background-color: blue;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.3 linear;

          }
          .hamberger{
            display: none;
          }
    `}
    </style>
  </>
}

export function Nav() {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <div className="hamburger">
          <Hamberger />
        </div>
      </div>
      <style jsx>{`
          .navigation {
            width: 100%;
            background-color: aqua;
            height: 50px;
          }
          .navigation ul{
            flex-wrap: wrap;
            display: flex;
            float: :right;
            margin: 20 0px;
            padding: 0 25px;
          }
      .navigation ul li{
    list-style: none;
    padding-right: 10px;
      `}
      </style>
    </>
  );
}

export default Nav;
