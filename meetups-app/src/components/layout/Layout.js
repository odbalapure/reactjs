import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      {/* The navabr component */}
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
