export function abbreviateInitials(initials: string) {
  // if initials are e.g. Nikolas Baker, the abbr initials will be N.B. etc.
  // but if the initials are e.g. Nikolas, the abbr initials will be N.
  if (initials.includes(` `)) {
    const [first, last] = initials.split(` `);
    return `${first[0]}.${last[0]}`;
  } else {
    return `${initials[0]}`;
  }
}
