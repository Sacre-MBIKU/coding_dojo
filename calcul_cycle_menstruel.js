const calculateMenstrualCycle = (lastStartDate, cycleDuration) => {
  lastStartDate = new Date(lastStartDate).getTime();
  const dayInMilesSeconds = 24 * 3600 * 1000;
  const menstruationDate = lastStartDate + cycleDuration;
  const ovulationDate = lastStartDate + (cycleDuration / 2) * dayInMilesSeconds;
  cycleDuration = cycleDuration * dayInMilesSeconds;
  const periodOfMaximumFertility = ovulationDate + 5 * dayInMilesSeconds;
  return `menstruation Date : ${new Date(menstruationDate)}
    ovulation date : ${new Date(ovulationDate)}
    period Of maximum fertility : ${new Date(periodOfMaximumFertility)}
  `;
};

console.log(calculateMenstrualCycle("06/25/2021", 31));
