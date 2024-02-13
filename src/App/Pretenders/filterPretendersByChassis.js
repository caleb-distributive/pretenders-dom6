export function filterPretendersByChassis(pretenders, pretenderIds, chassis, scales, scalelimits) {
    return pretenderIds.filter(id => {
      return  (   chassis[pretenders[id].startdom]
              &&  (scales.order         <= ( 2 + scalelimits.order        + ((scalelimits.order         === 0) || ((scalelimits.order         < 0) !== (pretenders[id].moreorder  < 0)) ? pretenders[id].moreorder  : 0)))
              &&  (scales.order         >= (-2 + scalelimits.order        + ((scalelimits.order         === 0) || ((scalelimits.order         < 0) !== (pretenders[id].moreorder  < 0)) ? pretenders[id].moreorder  : 0)))
              &&  (scales.productivity  <= ( 2 + scalelimits.productivity + ((scalelimits.productivity  === 0) || ((scalelimits.productivity  < 0) !== (pretenders[id].moreprod   < 0)) ? pretenders[id].moreprod   : 0)))
              &&  (scales.productivity  >= (-2 + scalelimits.productivity + ((scalelimits.productivity  === 0) || ((scalelimits.productivity  < 0) !== (pretenders[id].moreprod   < 0)) ? pretenders[id].moreprod   : 0)))
              &&  (scales.heat          <= ( 2 + scalelimits.heat         + ((scalelimits.heat          === 0) || ((scalelimits.heat          < 0) !== (pretenders[id].moreheat   < 0)) ? pretenders[id].moreheat   : 0)))
              &&  (scales.heat          >= (-2 + scalelimits.heat         + ((scalelimits.heat          === 0) || ((scalelimits.heat          < 0) !== (pretenders[id].moreheat   < 0)) ? pretenders[id].moreheat   : 0)))
              &&  (scales.growth        <= ( 2 + scalelimits.growth       + ((scalelimits.growth        === 0) || ((scalelimits.growth        < 0) !== (pretenders[id].moregrowth < 0)) ? pretenders[id].moregrowth : 0)))
              &&  (scales.growth        >= (-2 + scalelimits.growth       + ((scalelimits.growth        === 0) || ((scalelimits.growth        < 0) !== (pretenders[id].moregrowth < 0)) ? pretenders[id].moregrowth : 0)))
              &&  (scales.fortune       <= ( 2 + scalelimits.fortune      + ((scalelimits.fortune       === 0) || ((scalelimits.fortune       < 0) !== (pretenders[id].moreluck   < 0)) ? pretenders[id].moreluck   : 0)))
              &&  (scales.fortune       >= (-2 + scalelimits.fortune      + ((scalelimits.fortune       === 0) || ((scalelimits.fortune       < 0) !== (pretenders[id].moreluck   < 0)) ? pretenders[id].moreluck   : 0)))
              &&  (scales.magic         <= ( 2 + scalelimits.magic        + ((scalelimits.magic         === 0) || ((scalelimits.magic         < 0) !== (pretenders[id].moremagic  < 0)) ? pretenders[id].moremagic  : 0)))
              &&  (scales.magic         >= (-2 + scalelimits.magic        + ((scalelimits.magic         === 0) || ((scalelimits.magic         < 0) !== (pretenders[id].moremagic  < 0)) ? pretenders[id].moremagic  : 0)))
              );
    });
}
