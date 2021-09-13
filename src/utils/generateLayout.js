function generateLayout(todos) {
  let no_of_grids = 0;
  let height = 0;
  const initialWidth = 2;
  const initalHeight = 1;

  const layout = todos.map((item) => {
    if (item.newLayoutFlag) {
      if (no_of_grids + initialWidth <= 12) no_of_grids += initialWidth;
      else {
        height += 1;
        no_of_grids = initialWidth;
      }

      return {
        i: item.id,
        ...item.newLayout
      };
    } else {
      if (no_of_grids + initialWidth <= 12) {
        let x_value = no_of_grids;
        no_of_grids += initialWidth;

        return {
          i: item.id,
          x: x_value,
          y: height,
          w: initialWidth,
          h: initalHeight,
          maxW: 12,
          maxH: 4,
          minW: 1,
          minH: 1,
          // content: <Widgetbox contentdata={item} SectionId={sectionID} />,
          static: false,
          isDraggable: true,
          isResizable: true
        };
      } else {
        height += 1;
        no_of_grids = 0;

        return {
          i: item.id,
          x: 0,
          y: height,
          w: initialWidth,
          h: initalHeight,
          maxW: 12,
          maxH: 4,
          minW: 1,
          minH: 1,
          //content: <Widgetbox contentdata={item} SectionId={sectionID} />,
          static: false,
          isDraggable: true,
          isResizable: true
        };
      }
    }
  });

  return layout;
}

export default generateLayout;
