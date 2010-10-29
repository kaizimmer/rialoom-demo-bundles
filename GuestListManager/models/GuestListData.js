org.rialoom.utils.ClassUtils.createPackage("models");
/**
 * GuestListData constructor
 * @author k.zimmer aka engimono
 */
models.GuestListData = function ( )
{
    org.rialoom.mvcs.Actor.call(this);
    this.guests = [];
};

org.rialoom.utils.ClassUtils.inherits(models.GuestListData, org.rialoom.mvcs.Actor);



/**
 * Returns copy of guests:Array
 */
models.GuestListData.prototype.getList = function ( )
{
    return this.guests.slice();
};


/**
 *  Adds guest to list
 */
models.GuestListData.prototype.addGuest = function ( name )
{
    this.guests.push(name);
    var e = new events.GuestListEvent(events.GuestListEvent.ON_CHANGED, this);
    this.dispatch(e);
};


/**
 * toString Method
 */
models.GuestListData.prototype.toString = function ( )
{
    return "[models.GuestListData [ " + this.guests.join(" | ") + " ]]";
};