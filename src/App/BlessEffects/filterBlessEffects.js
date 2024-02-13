export function filterBlessEffects(effects, paths, scales) {
  return effects.filter(effect => {
    return  (     (effect.f <= paths.f)
              &&  (effect.f <= paths.f)
              &&  (effect.a <= paths.a)
              &&  (effect.w <= paths.w)
              &&  (effect.e <= paths.e)
              &&  (effect.s <= paths.s)
              &&  (effect.d <= paths.d)
              &&  (effect.n <= paths.n)
              &&  (effect.g <= paths.g)
              &&  (effect.b <= paths.b)
              &&  (effect.scales?.order         ? (effect.scales.order        > 0 && scales.order         >= effect.scales.order        ) || (effect.scales.order         < 0 && scales.order         <= effect.scales.order        ) : true)
              &&  (effect.scales?.productivity  ? (effect.scales.productivity > 0 && scales.productivity  >= effect.scales.productivity ) || (effect.scales.productivity  < 0 && scales.productivity  <= effect.scales.productivity ) : true)
              &&  (effect.scales?.heat          ? (effect.scales.heat         > 0 && scales.heat          >= effect.scales.heat         ) || (effect.scales.heat          < 0 && scales.heat          <= effect.scales.heat         ) : true)
              &&  (effect.scales?.growth        ? (effect.scales.growth       > 0 && scales.growth        >= effect.scales.growth       ) || (effect.scales.growth        < 0 && scales.growth        <= effect.scales.growth       ) : true)
              &&  (effect.scales?.fortune       ? (effect.scales.fortune      > 0 && scales.fortune       >= effect.scales.fortune      ) || (effect.scales.fortune       < 0 && scales.fortune       <= effect.scales.fortune      ) : true)
              &&  (effect.scales?.magic         ? (effect.scales.magic        > 0 && scales.magic         >= effect.scales.magic        ) || (effect.scales.magic         < 0 && scales.magic         <= effect.scales.magic        ) : true)
            );
  });
}
