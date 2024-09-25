import Icon from '../Icon/Icon';

export function Footer() {
  return (
    <footer className="bg-slate-900">
      <section className="container text-center md:text-left text-slate-200">
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 py-12">
          <div className="flex flex-col space-y-6">
            <a className="font-medium text-white" href="#">
              Product
            </a>
            <a href="#">Pricing</a>
            <a href="#">Overview</a>
            <a href="#">Browse</a>
            <a href="#">Accessibility</a>
            <a href="#">Five</a>
          </div>
          <div className="flex flex-col space-y-6">
            <a className="font-medium text-white" href="#">
              Solutions
            </a>
            <a href="#">Brainstorming</a>
            <a href="#">Ideation</a>
            <a href="#">Wireframing</a>
            <a href="#">Research</a>
            <a href="#">Design</a>
          </div>
          <div className="flex flex-col space-y-6">
            <a className="font-medium text-white" href="#">
              Support
            </a>
            <a href="#">Contact Us</a>
            <a href="#">Developers</a>
            <a href="#">Documentation</a>
            <a href="#">Integrations</a>
            <a href="#">Reports</a>
          </div>
          <div className="flex flex-col space-y-6">
            <a className="font-medium text-white" href="#">
              Get the App
            </a>
            <div className="flex flex-col items-center md:items-start mt-5 space-y-4 h-full">
              <a href="#" className="flex items-center">
                <Icon name="appstore" height={40} width={120} />
              </a>
              <a href="#">
                <Icon name="googleplay" height={40} width={135} />
              </a>
              <div className="flex flex-col space-y-3 h-full justify-end">
                <a href="#">Follow Us</a>
                <div className="flex items-center space-x-4">
                  <a href="#">
                    <Icon name="youtube" width={24} height={24} />
                  </a>
                  <a href="#">
                    <Icon name="facebook" width={24} height={24} />
                  </a>
                  <a href="#">
                    <Icon name="twitter" width={24} height={24} />
                  </a>
                  <a href="#">
                    <Icon name="instagram" width={24} height={24} />
                  </a>
                  <a href="#">
                    <Icon name="linkedin" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 border-t-[1px] border-slate-700 flex flex-col md:flex-row gap-8 justify-between items-center">
          <p>Collers @ 2023. All rights reserved.</p>
          <div className="flex justify-between space-x-8">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
            <div className="flex items-center">
              <Icon name="world" width={24} height={24} />
              <span className="ms-1">EN</span>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}
