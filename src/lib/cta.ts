export function intakeHref(service: string, source: string) {
  return `/intake?service=${encodeURIComponent(service)}&source=${encodeURIComponent(source)}`;
}
