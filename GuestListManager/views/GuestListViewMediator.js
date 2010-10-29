org.rialoom.utils.ClassUtils.createPackage("views");
/**
 * GuestListViewMediator constructor
 * @author k.zimmer aka engimono
 */
views.GuestListViewMediator = function ( )
{
    org.rialoom.mvcs.AbstractMediator.call(this);
};

org.rialoom.utils.ClassUtils.inherits(views.GuestListViewMediator, org.rialoom.mvcs.AbstractMediator);


/**
 * register context listener
 */
views.GuestListViewMediator.prototype.onRegister = function ( )
{
    // listen to changes in the model
    this.getEventDispatcher()
            .addEventListener(events.GuestListEvent.ON_CHANGED,
                              this, this.updateList, events.GuestListEvent);
};


/**
 * Updates view with current guest list data
 */
views.GuestListViewMediator.prototype.updateList = function ( )
{
    this.$view.empty();
    var list = "<ul>";
    var guestListData = this.getModelMap().getModel(models.GuestListData, "SaturdayNightPartyList");
    var guests = guestListData.getList();
    for ( var i = 0; i < guests.length; i++ )
    {
        list += "<li>" + guests[i] + "</li>"
    }
    list += "</ul>";
    this.$view.append(list);

};


/**
 * toString Method
 */
views.GuestListViewMediator.prototype.toString = function ( )
{
    return "[views.GuestListViewMediator]";
};