export class Application {
  public name: string = "";
  public image: string = "";
  public category: string = "";
  public status: string = "";

  static myApplications: Application[] = [
    { 'name': 'EBOO', 'image': 'eboo-logo.png', 'category': 'bancaire', 'status': 'ATTACKED' },
    { 'name': 'R-Net', 'image': 'raffeisen-logo.jpg', 'category': 'bancaire', 'status': 'NOTHING' }
  ];
}
