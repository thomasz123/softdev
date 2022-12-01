# Table Corner: Sadi Nirloy and Thomas Zhang
## Foundation Front End Frameworks
### Grid XY
- In order to make the most of flex boxes in css, Foundation has the grid-x and grid-y classes for div tags.
	- grid-x represents a row, and grid-y represents a column. Both adjust to the size of your screen
```
	<div class="grid-x">

	</div>
	<div class="grid-y">

	</div>
```
- These rows and columns are populated by cells, another div class.
```
	<div class="grid-x">
	  <div class="cell">A cell to take up the entire row</div>
	  <div class="cell">Taking up the next row</div>
	</div>

	<div class="grid-y">
	  <div class="cell">A cell to take up the entire row</div>
	  <div class="cell">Still on the next row</div>
	</div>
```
- 
	- The cells in grid-x can be assigned a size to take up only part of the row. A full row has a size of 12 units.
	- In the example, you'll see a word that describes size, like small, big, or medium. These are referring to the relative window size. So when you put "<size>-num" in the tage, you say: when the window is <size>, the cell is num units wide. You can have a different numerical size for each window size by adding multiple "<size>-num" to your div tag. All cells in the row should share the same set of window sizes. Smaller tags can scale up. If you shrink the window to a size not set, the cell expands to the full row.
```
	<div class="grid-x">
	  <div class="cell big-4">One-third of the row</div>
	  <div class="cell small-8">The rest</div>
	</div>

	<div class="grid-y">
	  <div class="cell small-4">Whole Row</div>
	  <div class="cell small-2">The next row</div>
	</div>
```
- 
	- In the grid-y, you'll see how the cell still stretches across the entire row.
	- You can add the height attribute to the style of the div with the grid class to stylize all of the cells. This allows you to change the vertical size.
```
	<div class="grid-x">
	  <div class="cell big-4">One-third of the row</div>
	  <div class="cell small-8">The rest</div>
	</div>

	<div class="grid-y" style="height: 300px;">
	  <div class="cell small-4">Whole Row</div>
	  <div class="cell small-2">The next row</div>
	</div>
```
- To make an actual grid: Make a grid-x that has grid-ys within the cells
```	
	<div class="grid-x">
	  <div class="cell small-2">
	    <div class="grid-y">
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	    </div>
	  </div>
	  <div class="cell small-6">
	    <div class="grid-y">
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	    </div>
	  </div>
	  <div class="cell small-4">
	    <div class="grid-y">
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	    </div>
	  </div>
	</div>
```
- Spacing can be added to your rows and columns in two ways by putting the following in the class string
	- grid-margin-(x or y) adds a space to {x: the left, y: the top} of the cell
	- grid-padding-(x or y) adds spaces before and after the cell along that vector
		- These margins and paddings don't have to match the vector of the grid.
```	
	<div class="grid-x grid-margin-x">
	  <div class="cell small-2">
	    <div class="grid-y grid-margin-y">
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	    </div>
	  </div>
	  <div class="cell small-6">
	    <div class="grid-y grid-padding-y">
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	    </div>
	  </div>
	  <div class="cell small-4">
	    <div class="grid-y grid-padding-x">
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	      <div class="cell">
		X
	      </div>
	    </div>
	  </div>
	</div>
```
- There is a "grid-container" class for divs that center your grid-x, set a max width, and have padding in the grid-container-padding. However, I am not sure how to change these values.
```
(Taken straight from site)
<div class="grid-container">
  <div class="grid-x grid-margin-x">
    <div class="cell small-4">cell</div>
    <div class="cell small-4">cell</div>
    <div class="cell small-4">cell</div>
  </div>
</div>
```
- Cells of a grid-x can have left margins by using offsets in the class: <window size>-offset-num
```
(Also from site)
<div class="grid-x grid-margin-x">
  <div class="cell small-4 large-offset-2">Offset 2 on large</div>
  <div class="cell small-4">4 cells</div>
</div>
```
### Forms 
