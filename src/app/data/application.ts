export class Application {
  public name: string = "";
  public image: string = "";
  public category: string = "";
  public statusToday: string = "";
  public statusJ7: string = "";
  public statusJ15: string = "";

  static myApplications: Application[] = [
    { 'name': 'EBOO', 'image': 'eboo-logo.png', 'category': 'Finance', 'statusToday': 'ATTACKED', 'statusJ7': 'NOTHING', 'statusJ15': 'NOTHING' },
    { 'name': 'R-Net', 'image': 'raffeisen-logo.jpg', 'category': 'Finance', 'statusToday': 'NOTHING', 'statusJ7': 'NOTHING', 'statusJ15': 'ATTACKED' }
  ];
}
