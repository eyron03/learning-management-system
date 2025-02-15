export function generateUsername(role: string): string {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const randomNum = Math.floor(1000 + Math.random() * 9000); 
  
    let rolePrefix: string;
    switch (role) {
      case "SUPER_ADMIN":
        rolePrefix = "A";
        break;
      case "TEACHER":
        rolePrefix = "T";
        break;
      case "STUDENT":
        rolePrefix = "S";
        break;
      default:
        rolePrefix = "U"; 
    }
  
    return `${year}-${randomNum}-${rolePrefix}`;
  }
  