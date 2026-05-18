// @mis/audit-logger — STUB.
// Production: async hash-chained audit events to Kafka topic mis.audit.
// PoC: logs to stdout.
export const PACKAGE = "@mis/audit-logger";

export interface AuditEvent {
  action: string;
  actor: string;
  resource: { type: string; id: string };
  metadata?: Record<string, unknown>;
}

export class AuditLoggerService {
  async log(event: AuditEvent): Promise<void> {
    console.log(`[audit] ${event.action} by ${event.actor}`, event.resource);
  }
}

export function banner(): string {
  return `[${PACKAGE}] stub loaded`;
}
