export declare class SideDrawer {
  showContactInfo: boolean;
  headerTitle: string;
  open: boolean;
  onCloseDrawer(): void;
  onContentChange(content: string): void;
  /**
   * Developers should try to rely on publicly exposed methods as little as
   * possible, and instead default to using properties and events as much as
   * possible. As an app scales, we've found it's easier to manage and pass data
   * through @Prop rather than public methods.
   */
  openMe(): Promise<void>;
  closeMe(): Promise<void>;
  render(): any[];
}
