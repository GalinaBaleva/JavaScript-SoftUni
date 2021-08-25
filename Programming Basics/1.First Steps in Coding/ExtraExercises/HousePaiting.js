function housePainting(input) {
               let hightOfHouse = Number(input[0]);
               let weghtOfHouse = Number(input[1]);
               let highOfTriangle = Number(input[2]);


               let rectangleArea = hightOfHouse * weghtOfHouse;
               let windowArea = 1.5 * 1.5;
               let bouthReсtangleAreas = rectangleArea * 2 - windowArea * 2;

               let dorsarea = 1.2 * 2;
               let backSideArea = hightOfHouse * hightOfHouse;
               let frontBackSideAreas = backSideArea * 2 - dorsarea;
               let totalBottomHousArea = bouthReсtangleAreas + frontBackSideAreas;

               let greenPaint = totalBottomHousArea / 3.4;

               let roofRectangleAre = hightOfHouse * weghtOfHouse;
               let totalroofRectangleAre = roofRectangleAre * 2;
               let roofTriangleAreas = 2 * (highOfTriangle * hightOfHouse / 2);
               let totalRoofArea = totalroofRectangleAre + roofTriangleAreas;

               let redPaint = totalRoofArea / 4.3;

               console.log(greenPaint.toFixed(2))
               console.log(redPaint.toFixed(2))
}



housePainting(["6", "10", "5.2",])
housePainting(["10.2", "15.4", "8.88"])
