export function formatNumberWithCommas(number: number): string {
    const nf = new Intl.NumberFormat('en-US');
    return nf.format(number);
}