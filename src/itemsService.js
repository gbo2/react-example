
class ItemsService {
    constructor(liste) {
        this.list = liste;

        this.push = function(item) {
            this.list.push(item);
            this.listComponent.setState({"test":"test"});
        }
        this.getList = function()
        { 
            return this.list;
        }
        this.setListComponent = function(listComponent) {
            this.listComponent = listComponent;
        }
    }
}

export default ItemsService;