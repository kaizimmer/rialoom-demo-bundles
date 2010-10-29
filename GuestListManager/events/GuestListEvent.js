org.rialoom.utils.ClassUtils.createPackage("events");
/**
 * GuestListEvent constructor
 * @author k.zimmer aka engimono
 */
events.GuestListEvent = function ( type, target )
{
    org.rialoom.events.Event.call(this, type, target);
};

org.rialoom.utils.ClassUtils.inherits(events.GuestListEvent, org.rialoom.events.Event);


/**
 * toString Method
 */
events.GuestListEvent.prototype.toString = function ( )
{
    return "[events.GuestListEvent type: " + this.getType() + " | target: " + this.getTarget() + " ]";
};


events.GuestListEvent.ON_CHANGED = "ON_CHANGED";
