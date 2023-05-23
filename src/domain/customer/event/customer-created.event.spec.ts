import Customer from "../entity/customer"
import EventDispatcher from "../../@shared/event/event-dispatcher"
import CustomerCreatedEvent from "./customer-created.event"
import SendConsoleLog1Handler from "./handler/send-console-log-1.handler"
import SendConsoleLog2Handler from "./handler/send-console-log-2.handler"

describe("Customer created event unit test", () => {

  it("should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler1 = new SendConsoleLog1Handler();
    const eventHandler2= new SendConsoleLog2Handler();
    const spyEventHandler1 = jest.spyOn(eventHandler1, "handle");
    const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

    eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
    eventDispatcher.register("CustomerCreatedEvent", eventHandler2);

    const customer = new Customer('1', 'John');

    const event = new CustomerCreatedEvent(customer);

    eventDispatcher.notify(event);

    expect(spyEventHandler1).toHaveBeenCalled(); 
    expect(spyEventHandler2).toHaveBeenCalled(); 
  })
})