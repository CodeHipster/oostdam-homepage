// Generated by CoffeeScript 2.5.1
(function() {
  //The grid object that is being tossed around :D
  /*
  prerequisists: depends on canvas for calculating cellSize
  */
  //TODO: give grid a backbuffer
  define(['grid-tools', 'lodash'], function(gridTools, _) {
    var grid, moduleName;
    moduleName = "grid";
    console.log(moduleName);
    grid = {
      front: null,
      back: null
    };
    // default value.
    grid.front = gridTools.getEmptyGrid(50, 50);
    grid.back = _.cloneDeep(grid.front);
    return grid;
  });

}).call(this);