/**
 * Plugin.js file, set configs, routes, hooks and events here
 *
 * see http://wejs.org/docs/we/extend.plugin
 */
module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);
  // set plugin configs
  // plugin.setConfigs({
  // });
  // ser plugin routes
  // plugin.setRoutes({
  // });
  //

  // after load all plugins set response formatters
  plugin.events.on('we:after:load:plugins', function (we) {
    // add in configs
    we.config.responseTypes.push('application/ld+json');

    we.responses.formaters['application/ld+json'] =  function jsonFormater(data, req, res) {
      if (!res.locals.model) {
        // set messages
        data.messages = res.locals.messages;
        return data;
      }

      console.log('format the data with jsonld format and send to user');
      // if data = array is a list and if is obejct is a single request
      // res.locals.model is the model name related to this response data
      res.send('TODO!');
    }

  });


  return plugin;
};