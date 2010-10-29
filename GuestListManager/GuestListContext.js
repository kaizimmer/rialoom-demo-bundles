/**
 * GuestListContext constructor
 * @author k.zimmer aka engimono
 */
GuestListContext = function ( )
{
    // Invoke superclass constructor
    org.rialoom.mvcs.AbstractContext.call(this);
}

org.rialoom.utils.ClassUtils.inherits(GuestListContext, org.rialoom.mvcs.AbstractContext);


/**
 *  do model mappings here
 */
GuestListContext.prototype.mapModels = function ( )
{
    this.getModelMap().addModel(models.GuestListData, "SaturdayNightPartyList");
};


/**
 *  do mediator mappings here
 */
GuestListContext.prototype.mapMediators = function ( )
{
    this.getMediatorMap().mapView('.guest-list', views.GuestListViewMediator);
    this.getMediatorMap().mapView('.guest-list-manager', views.ManagerViewMediator);
};


/**
 * 
 */
GuestListContext.prototype.toString = function ( )
{
    return "[GuestListContext]";
};