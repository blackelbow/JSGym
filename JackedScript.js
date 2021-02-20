//Functions to calculate useful metrics for weight training

//Calculate tonnage for a given set
function calcTonnage (weight, reps) {
  return weight*reps;
};

//Calculate percentage of one rep max for a given set
function calcIntensity (weight, max) {
  return 100*(weight/max);
};

//Calculate a theoretical one rep max based on a given set
function calcOneRepMax (weight, reps){
  return weight*(1+(0.033*reps));
};

//Calculate 'Intensity + Number of Lifts' metric from Hristov 2005
function calcINOL (weight, reps, max) {
  let intensity = calcIntensity (weight, max);
  return reps/(100-intensity)
  };

//Calculate tonnage adjusted for percentage of one rep max used for a given set
function calcRelativeTonnage (weight, reps, max) {
  let intensity = calcIntensity (weight, max);
  let tonnage = calcTonnage (weight, reps);
  return (intensity/100)*tonnage
  };

//Calculate the maximum number of reps that could be performed at this weight based on percentage of one rep max being used
function calcMaxReps (weight, max) {
  let intensity = calcIntensity (weight, max);
  return Math.floor((100-intensity)/3)
  };

//Calculate the number of reps in reserve for a given set
function calcRIR (weight, reps, max) {
  let maximum_reps = calcMaxReps (weight, max);
  return maximum_reps-reps
  };

//Calculate the number of effective reps for a given set, assuming only those within 5 reps of failure are effective
function calcEffectiveReps (weight, reps, max) {
  let effective_cutoff = 5;
  let max_reps = calcMaxReps(weight, max);
  let threshold = max_reps-effective_cutoff;
  let theoretical_effective_reps = reps-threshold;

  if (max_reps<=effective_cutoff){
    return reps
    }
  else {
    if (theoretical_effective_reps<=0) {
      return 0
      }
    else {
      return theoretical_effective_reps
      }
    }
};



