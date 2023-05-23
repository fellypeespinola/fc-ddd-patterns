import EventDispatcher from "../../@shared/event/event-dispatcher";
import Customer from "../entity/customer";
import Address from "../value-object/address";
import CustomerAddressChangedEvent from "./customer-address-changed.event";
import SendConsoleLogHandler from "./handler/send-console-log.handler";

describe("Customer address changed unit test", () => {
  it("should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendConsoleLogHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("CustomerAddressChangedEvent", eventHandler);

    const customer = new Customer('1', 'John');
    const address = new Address('Rua A', 1 , '49095-188', "Aracaju")

    customer.changeAddress(address)

    const event = new CustomerAddressChangedEvent(customer);

    eventDispatcher.notify(event);

    expect(spyEventHandler).toHaveBeenCalled();
  })
})