export function generateUsername(role: string): string {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);

  let counter = 1;

  const randomNum = (counter++).toString().padStart(4, '0');

  let rolePrefix: string;
  switch (role) {
      case "SUPER_ADMIN":
          rolePrefix = "SA";
          break;
      case "TEACHER":
          rolePrefix = "T";
          break;
      case "STUDENT":
          rolePrefix = "S";
          break;
      default:
          rolePrefix = "A"; 
  }

  return `${year}-${randomNum}-${rolePrefix}`;
}
