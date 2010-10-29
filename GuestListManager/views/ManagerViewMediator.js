org.rialoom.utils.ClassUtils.createPackage("views");
/**
 * ManagerViewMediator constructor
 * @author k.zimmer aka engimono
 */
views.ManagerViewMediator = function ( )
{
    org.rialoom.mvcs.AbstractMediator.call(this);
};

org.rialoom.utils.ClassUtils.inherits(views.ManagerViewMediator, org.rialoom.mvcs.AbstractMediator);


/**
 * Store references and register listeners
 */
views.ManagerViewMediator.prototype.onRegister = function ( )
{
    this.guestListData = this.getModelMap().getModel(models.GuestListData, "SaturdayNightPartyList");
    this.$inputField = this.$view.find('input:first');
    this.$view.bind("submit.ManagerViewMediator",
                    org.rialoom.utils.Delegate.create(this, this.handleSubmit));
};


/**
 * Adds stores user input in guest list model
 */
views.ManagerViewMediator.prototype.handleSubmit = function ( $e )
{
    $e.preventDefault();
    var guest = this.$inputField.val();
    if ( guest == "" ) return;
    this.guestListData.addGuest(guest)
    this.$inputField.val("");
};


/**
 * toString Method
 */
views.ManagerViewMediator.prototype.toString = function ( )
{
    return "[views.ManagerViewMediator]";
};