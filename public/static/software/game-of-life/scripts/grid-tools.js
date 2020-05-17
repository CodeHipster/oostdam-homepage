// Generated by CoffeeScript 2.5.1
(function() {
  define(['jquery'], function(jquery) {
    var gridTools, moduleName;
    moduleName = "grid-tools";
    console.log(moduleName);
    //#################
    //gridTools object#
    //#################
    gridTools = {
      // set all cells to false
      // NOTE: cell = false won't work as primitives are not stored as references.
      clean: function(grid) {
        grid.forEach(function(column) {
          return column.forEach(function(cell, i) {
            return column[i] = false;
          });
        });
        return grid;
      },
      swap: function(grid) {
        var temp;
        temp = grid.front;
        grid.front = grid.back;
        return grid.back = temp;
      },
      // note that length is 1 higher then the index.
      isWithinGrid: function(grid, x, y) {
        if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
          return true;
        } else {
          return false;
        }
      },
      getEmptyGrid: function(width, height) {
        var grid, j, k, ref, ref1, x, y;
        //console.log moduleName, "constructing grid"

        // set each cell to be false.
        grid = [];
        for (x = j = 0, ref = width - 1; (0 <= ref ? j <= ref : j >= ref); x = 0 <= ref ? ++j : --j) {
          grid[x] = [];
          for (y = k = 0, ref1 = height - 1; (0 <= ref1 ? k <= ref1 : k >= ref1); y = 0 <= ref1 ? ++k : --k) {
            grid[x][y] = false;
          }
        }
        return grid;
      },
      /*return count of alive neighbours.
      neighbours:
      [0][1][2]
      [3][c][4]
      [5][6][7]
      neighbours that fall outside the grid are undefined.
      */
      getNrOfNeighbours: function(grid, x, y) {
        var count, index, j, len, n, neighbours, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
        //console.log moduleName, "getNeighbours x:#{x} y:#{y} \n\tgrid:", grid
        neighbours = [(ref = grid[x - 1]) != null ? ref[y - 1] : void 0, (ref1 = grid[x]) != null ? ref1[y - 1] : void 0, (ref2 = grid[x + 1]) != null ? ref2[y - 1] : void 0, (ref3 = grid[x - 1]) != null ? ref3[y] : void 0, (ref4 = grid[x + 1]) != null ? ref4[y] : void 0, (ref5 = grid[x - 1]) != null ? ref5[y + 1] : void 0, (ref6 = grid[x]) != null ? ref6[y + 1] : void 0, (ref7 = grid[x + 1]) != null ? ref7[y + 1] : void 0];
        count = 0;
        for (index = j = 0, len = neighbours.length; j < len; index = ++j) {
          n = neighbours[index];
          if (n === true) {
            count = count + 1;
          }
        }
        return count;
      }
    };
    return gridTools;
  });

}).call(this);
