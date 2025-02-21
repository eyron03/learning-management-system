export function generateControlNo(latestNumber: number): string {
    const year = new Date().getFullYear();
    const formattedNumber = String(latestNumber + 1).padStart(3, "0");
    return `SA-${year}${formattedNumber}`;
  }
  