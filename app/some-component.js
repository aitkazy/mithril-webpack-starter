import m from "mithril";

class SomeComponent {
  logger() {
    console.log("asdasdsdsdsd");
  }

  oninit() {
    this.logger();
  }

  view() {
    return (
      <button onclick={this.logger} type="button" className="btn btn-primary">
        Primary
      </button>
    );
  }
}

export default SomeComponent;
