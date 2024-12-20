import { DarkThemeToggle, Navbar, Button, Flowbite, Footer } from "flowbite-react";
import { Outlet } from "react-router-dom";

const customTheme = {
  button: {
    color: {
      primary: "bg-primary-500 hover:bg-primary-600 text-white",
    },
  },
};

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar fluid={true} className="bg-gray-100">
        <Navbar.Brand href="/">
          <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Visivo Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Visivo</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link href="https://docs.visivo.io">Docs</Navbar.Link>
        </Navbar.Collapse>
        <div className="flex">
          <DarkThemeToggle className="mr-2" />
          <a href="https://app.visivo.io">
            <Button color="primary">App</Button>
          </a>
        </div>
      </Navbar >

      <main className="w-full flex-col items-center justify-center gap-2 dark:bg-gray-800">
        <Outlet />
      </main>

      <Footer container className="dark:bg-gray-900">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://visivo.io"
              src="/images/logo.png"
              alt="Visivo Logo"
              name="Visivo"
            />
            <Footer.LinkGroup>
              <Footer.Link href="/about-us">About</Footer.Link>
              <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Visivo™" year={2024} />
        </div>
      </Footer>
    </Flowbite>
  );
}

export default App;
