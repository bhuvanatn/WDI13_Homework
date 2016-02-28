- //planTrip('N', 'Times Square', '6', '33rd');
// This is only a suggested function name and signature.
// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
//planTrip(line1, from, lin2,to);
var mainLines = {
    lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
    line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}


frmLine = function(l1, frm) {
    if (l1 === "N") {
        return mainLines.lineN.indexOf(frm);
    } else if (l1 === "L") {
        return mainLines.lineL.indexOf(frm);
    } else if (l1 === '6') {
        return mainLines.line6.indexOf(frm);
    }
}
toLine = function(l2, to) {
    if (l2 === "N") {
        return mainLines.lineN.indexOf(to);
    } else if (l2 === "L") {
        return mainLines.lineL.indexOf(to);
    } else if (l2 === '6') {
        return mainLines.line6.indexOf(to);
    }
}
sameLineDestinations = function(l1, frm, l2, to) { // this function gets all the stops on same line including UnionSquare stop.
    if (l1 === l2) { // if both lines are same
        indexFrom = frmLine(l1, frm);
        indexTo = toLine(l2, to);
        var stops = ' ';
        console.log('Your must travel through the following stops on the ' + l1 + ' line:');
        if (l1 === "N") {
            for (var i = indexFrom; i <= indexTo; i++) {
                stops += mainLines.lineN[i] + ', ';
            }
        }
        if (l1 === "L") {
            for (var i = indexFrom; i <= indexTo; i++) {
                stops += mainLines.lineL[i] + ', ';
            }
        }
        if (l1 === "6") {
            for (var i = indexFrom; i <= indexTo; i++) {
                stops += mainLines.line6[i] + ', ';
            }
        }
        console.log(stops);
    }
}
backwardsAndforwardsfromUnionSquare = function(l2, to) {
  indexToUnionSqOnLineN = mainLines.lineN.indexOf('Union Square');
  indexToUnionSqOnLineL = mainLines.lineL.indexOf('Union Square');
  indexToUnionSqOnLine6 = mainLines.line6.indexOf('Union Square');
    stopsAt2ndLine = ' ';
    indexTo = toLine(l2, to);
    if (l2 === 'L') {
        if (indexToUnionSqOnLineL > indexTo) { //if index of Union Square is > then Toindex then its backwards
            for (var i = indexToUnionSqOnLineL; i >= 0; i--) {
                stopsAt2ndLine += mainLines.lineL[i] + ', ';
            }
        } else { //its forwards journey //(indexToUnionSqOnLineL < indexTo)
            for (var i = indexToUnionSqOnLineL; i <= indexTo; i++) {
                stopsAt2ndLine += mainLines.lineL[i] + ', ';
            }
        }
    }
    if (l2 === 'N') {
        if (indexToUnionSqOnLineN > indexTo) { //if index of Union Square is > then Toindex then its backwards
            for (var i = indexToUnionSqOnLineN; i >= 0; i--) {
                stopsAt2ndLine += mainLines.lineN[i] + ', ';
            }
        } else { //its forwards journey //(indexToUnionSqOnLineL < indexTo)
            for (var i = indexToUnionSqOnLineN; i <= indexTo; i++) {
                stopsAt2ndLine += mainLines.lineN[i] + ', ';
            }
        }
    }
    if (l2 === '6') {
        if (indexToUnionSqOnLine6 > indexTo) { //if index of Union Square is > then Toindex then its backwards
            for (var i = indexToUnionSqOnLine6; i >= 0; i--) {
                stopsAt2ndLine += mainLines.line6[i] + ', ';
            }
        } else { //its forwards journey //(indexToUnionSqOnLineL < indexTo)
            for (var i = indexToUnionSqOnLine6; i <= indexTo; i++) {
                stopsAt2ndLine += mainLines.line6[i] + ', ';
            }
        }
    }
    console.log(stopsAt2ndLine);
};
toUnionSquareOnSameLine = function(l1, frm) {
    // if l1 and l2 different lines and l1=lineN
    // this code will find out stops from start point to UnionSquare on first line
    indexFrom = frmLine(l1, frm);
    stopsAt1stline = " ";
    console.log('Your must travel through the following stops on the ' + l1 + ' line :');
    if (l1 === 'N') {
        for (var i = indexFrom; i <= indexToUnionSqOnLineN; i++) {
            stopsAt1stline += mainLines.lineN[i] + ', ';
        }
    }
    if (l1 === 'L') {
        for (var i = indexFrom; i <= indexToUnionSqOnLineL; i++) {
            stopsAt1stline += mainLines.lineL[i] + ', ';
        }
    }
    if (l1 === '6') {
        for (var i = indexFrom; i <= indexToUnionSqOnLine6; i++) {
            stopsAt1stline += mainLines.line6[i] + ', ';
        }
    }
    console.log(stopsAt1stline);

}
planTrip = function(l1, frm, l2, to) {
        if (l1 === l2) {
            sameLineDestinations(l1, frm, l2, to);
        } else if (l1 !== l2) {
            toUnionSquareOnSameLine(l1, frm);
            console.log('Change at Union Square.');
            console.log('"Your journey continues through the following stops:');
            // This code will find out index at UnionSquare and will find out path is forwards or backwards
            backwardsAndforwardsfromUnionSquare(l2, to);
        }else{
          console.log('Please enter correct lines');
        }

        console.log('--------------------------------------------------------------------');
    }
    //this end is for function
    // lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    // lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
    // line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  planTrip('N', 'Times Square', 'N', '8th');
  planTrip('L', '6th', 'L', '1st');
  planTrip('6', '33rd', '6', '23rd');

  planTrip('N', '34th', 'L', '1st');
  planTrip('N', '34th', 'L', '8th');

  planTrip('N', '34th', '6', 'Astor Place');
  planTrip('N', '34th', '6', 'Grand Central');

  planTrip('6', '33rd', 'N', '8th');
  planTrip('6', '33rd', 'N', '34th');
