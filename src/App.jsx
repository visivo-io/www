import { DarkThemeToggle, Navbar, Button, Flowbite, Footer, Dropdown } from "flowbite-react";
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
      <Navbar fluid={true} className="sticky top-0 z-50 w-full bg-gray-100">
        <Navbar.Brand href="/">
          <img src="/images/logo.webp" className="mr-3 h-6 sm:h-9" alt="Visivo Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Visivo</span>
        </Navbar.Brand>

        <div className="flex md:order-2">
          <DarkThemeToggle className="mr-2" />
          <a href="https://app.visivo.io">
            <Button color="primary">App</Button>
          </a>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <div className="flex items-center text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:hover:text-cyan-700">
            <Dropdown
              label="Solutions"
              inline={true}
            >
              <Dropdown.Item
                href="/solutions/software-engineering"
                className="text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:hover:text-cyan-700"
              >
                Software Engineering
              </Dropdown.Item>
              <Dropdown.Item
                href="/solutions/business-intelligence"
                className="text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:hover:text-cyan-700"
              >
                Business Intelligence
              </Dropdown.Item>
              <Dropdown.Item
                href="/solutions/embedding"
                className="text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:hover:text-cyan-700"
              >
                Embedding
              </Dropdown.Item>
            </Dropdown>
          </div>
          <Navbar.Link href="/examples">Examples</Navbar.Link>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link href="https://docs.visivo.io">Docs</Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <main className="w-full flex-col items-center justify-center dark:bg-gray-800">
        <Outlet />
      </main>

      <Footer container className="dark:bg-gray-900">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://visivo.io"
              src="/images/logo.webp"
              alt="Visivo Logo"
              name="Visivo"
            />
            <Footer.LinkGroup>
              <Footer.Link href="/about-us">About</Footer.Link>
              <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
              <Footer.Link href="https://github.com/visivo-io">GitHub</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Visivo™" year={2024} />
        </div>
        <chatlio-widget widgetid="9b6c297a-87af-43b4-4a16-fa838c02755c"></chatlio-widget>
      </Footer>
    </Flowbite>
  );
}

export default App;
