import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'jd-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @State() showContactInfo = false;
  @Prop({ reflect: true }) headerTitle: string;
  @Prop({
    reflect: true,
    mutable: true
  }) open: boolean;

  onCloseDrawer() {
    this.open = false;
  }

  onContentChange(content: string) {
    // console.log(content);
    this.showContactInfo = content === 'contact';
  }

  /**
   * Developers should try to rely on publicly exposed methods as little as
   * possible, and instead default to using properties and events as much as
   * possible. As an app scales, we've found it's easier to manage and pass data
   * through @Prop rather than public methods.
   */
  @Method()
  async openMe() {
    this.open = true;
  }

  @Method()
  async closeMe() {
    this.onCloseDrawer();
  }

  render() {
    // let content = null;
    // if (this.open) {
    //   content = (
    //     <aside>
    //       <header><h1>{this.headerTitle}</h1></header>
    //       <main>
    //         <slot />
    //       </main>
    //     </aside>
    //   );
    // }

    let mainContent = <slot />;

    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact information</h2>
          <p>Please contact us at:</p>
          <ul>
            <li>Phone: 555-123-4567</li>
            <li>Email: <a href="mailto:contact@email.com">contact@email.com</a></li>
          </ul>
        </div>
      );
    }

    // You can return () or []
    return [
      <div
        id="backdrop"
        onClick={this.onCloseDrawer.bind(this)} />,
      <aside>
        <header>
          <h1>{this.headerTitle}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section class="tabs">
          <button
            class={!this.showContactInfo ? 'active' : ''}
            onClick={this.onContentChange.bind(this, 'navigation')}
            >
              Navigation</button>
          <button
            class={this.showContactInfo ? 'active' : ''}
            onClick={this.onContentChange.bind(this, 'contact')}
            >
              Contact</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    ];
  }
}
