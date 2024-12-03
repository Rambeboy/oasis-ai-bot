import _0x200ffa from 'chalk';
export function centerText(_0x34f157) {
  const _0x34ce3e = _0x34f157.split("\n");
  const _0x38b27e = process.stdout.columns || 0x50;
  return _0x34ce3e.map(_0x2c4b01 => {
    const _0xcd654a = Math.max((_0x38b27e - _0x2c4b01.length) / 0x2, 0x0);
    return " ".repeat(_0xcd654a) + _0x2c4b01;
  }).join("\n");
}
export function showBanner() {
  console.log(_0x200ffa.green(centerText("\nOASIS AI BETA CLI BOT\nAuthor : Nofan Rambe\nWelcome & Enjoy Sir!\n")));
}
