import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import AddressChangedEvent from "../customer-address-changed.event";

export default class SendConsoleLogHandler implements EventHandlerInterface<AddressChangedEvent> {
  handle(event: AddressChangedEvent) {
    const { id, name, Address } = event.eventData;
    console.log(`
      Client address: ${id}, {${name}}
      updated to:
        ${Address.street}, ${Address.number}.
        ${Address.city}, ${Address.zip}
      `)
  }
}