FlowRouter.route('/', {
    name: 'home',
    action: function(params) {
        BlazeLayout.render("appLayout", {
        	content: "home"
        });
    }
});