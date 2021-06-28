const initCalorieState = {
    dataCal: {
        labels: [''],
        datasets: [
          {
            label: 'KCal',
            data: [0, 2200],
            backgroundColor: [
              'rgba(51, 31, 0, 0.5)',
            ],
            borderColor: [
              'rgba(51, 31, 0, 1)',
            ],
            borderWidth: 1,
          },
        ],  
    } 
}
export function calProgress(state = initCalorieState, action) {
    switch (action.type) {
        case '@USER_HOME/CHANGE_UNIT_CAL':
            return {
                dataCal: {
                    labels: [''],
                    datasets: [
                      {
                        label: action.unit,
                        data: action.unit === state.dataCal.datasets[0].label ? 
                              state.dataCal.datasets[0].data : action.unit === 'Cal' ? 
                              [state.dataCal.datasets[0].data[0]/1000, state.dataCal.datasets[0].data[1]/1000] : [state.dataCal.datasets[0].data[0]*1000, state.dataCal.datasets[0].data[1]*1000],
                        backgroundColor: [
                          'rgba(51, 31, 0, 0.5)',
                        ],
                        borderColor: [
                          'rgba(51, 31, 0, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ],  
                }                   
            };
        case '@USER_HOME/UPDATE_DATA':            
            return {
                dataCal: {
                    labels: [''],
                    datasets: [
                      {
                        label: state.dataCal.datasets[0].label,
                        data: [state.dataCal.datasets[0].data[0] + Number(action.cal), state.dataCal.datasets[0].data[1]],
                        backgroundColor: [
                          'rgba(51, 31, 0, 0.5)',
                        ],
                        borderColor: [
                          'rgba(51, 31, 0, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ],  
                }                   
            };  
        case '@USER_HOME/SET_DATA':
          return {
            dataCal: {
              labels: [''],
              datasets: [
                {
                  label: state.dataCal.datasets[0].label,
                  data: [Number(action.cal), state.dataCal.datasets[0].data[1]],
                  backgroundColor: [
                    'rgba(51, 31, 0, 0.5)',
                  ],
                  borderColor: [
                    'rgba(51, 31, 0, 1)',
                  ],
                  borderWidth: 1,
                },
              ],  
            }                   
          };                                                                                    
        default:
            return state;
    }
}

const initSleepState = {
    dataSleep: {
        labels: [''],
        datasets: [
          {
            label: 'Hrs',
            data: [0, 8],
            backgroundColor: [
              'rgba(51, 31, 0, 0.5)',
            ],
            borderColor: [
              'rgba(51, 31, 0, 1)',
            ],
            borderWidth: 1,
          },
        ],
    }    
}
export function sleepProgress(state = initSleepState, action) {
    switch (action.type) {
        case '@USER_HOME/CHANGE_UNIT_SLEEP':
            return {
                dataSleep: {
                    labels: [''],
                    datasets: [
                      {
                        label: action.unit,
                        data: action.unit === state.dataSleep.datasets[0].label ? 
                              state.dataSleep.datasets[0].data : action.unit === 'Hrs' ? 
                              [state.dataSleep.datasets[0].data[0]/60, state.dataSleep.datasets[0].data[1]/60] : [state.dataSleep.datasets[0].data[0]*60, state.dataSleep.datasets[0].data[1]*60],
                        backgroundColor: [
                          'rgba(51, 31, 0, 0.5)',
                        ],
                        borderColor: [
                          'rgba(51, 31, 0, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                }                  
            };
        case '@USER_HOME/UPDATE_DATA':
            return {
                dataSleep: {
                    labels: [''],
                    datasets: [
                      {
                        label: state.dataSleep.datasets[0].label,
                        data: [state.dataSleep.datasets[0].data[0] + Number(action.sleep), state.dataSleep.datasets[0].data[1]],
                        backgroundColor: [
                          'rgba(51, 31, 0, 0.5)',
                        ],
                        borderColor: [
                          'rgba(51, 31, 0, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                }                  
            }; 
        case '@USER_HOME/SET_DATA':
            return {
              dataSleep: {
                labels: [''],
                datasets: [
                  {
                    label: state.dataSleep.datasets[0].label,
                    data: [Number(action.sleep), state.dataSleep.datasets[0].data[1]],
                    backgroundColor: [
                      'rgba(51, 31, 0, 0.5)',
                    ],
                    borderColor: [
                      'rgba(51, 31, 0, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }                  
            };           
        default:
            return state;
    }    
}

const initWaterState = {
    dataWater: {
        labels: [''],
        datasets: [
          {
            label: 'ml',
            data: [0, 2000],
            backgroundColor: [
              'rgba(51, 31, 0, 0.5)',
            ],
            borderColor: [
              'rgba(51, 31, 0, 1)',
            ],
            borderWidth: 1,
          },
        ], 
    }   
}
export function waterProgress(state = initWaterState, action) {
    switch (action.type) {
        case '@USER_HOME/CHANGE_UNIT_WATER':
            return {
                dataWater: {
                    labels: [''],
                    datasets: [
                      {
                        label: action.unit,
                        data: action.unit === state.dataWater.datasets[0].label ? 
                              state.dataWater.datasets[0].data : action.unit === 'l' ? 
                              [state.dataWater.datasets[0].data[0]/1000, state.dataWater.datasets[0].data[1]/1000] : [state.dataWater.datasets[0].data[0]*1000, state.dataWater.datasets[0].data[1]*1000],                        
                        backgroundColor: [
                          'rgba(51, 31, 0, 0.5)',
                        ],
                        borderColor: [
                          'rgba(51, 31, 0, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ], 
                }                    
            };
        case '@USER_HOME/UPDATE_DATA':
            return {
                dataWater: {
                    labels: [''],
                    datasets: [
                      {
                        label: state.dataWater.datasets[0].label,
                        data: [state.dataWater.datasets[0].data[0] + Number(action.water), state.dataWater.datasets[0].data[1]],                        
                        backgroundColor: [
                          'rgba(51, 31, 0, 0.5)',
                        ],
                        borderColor: [
                          'rgba(51, 31, 0, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ], 
                }                    
            };
        case '@USER_HOME/SET_DATA':
            return {
              dataWater: {
                labels: [''],
                datasets: [
                  {
                    label: state.dataWater.datasets[0].label,
                    data: [Number(action.water), state.dataWater.datasets[0].data[1]],                        
                    backgroundColor: [
                      'rgba(51, 31, 0, 0.5)',
                    ],
                    borderColor: [
                      'rgba(51, 31, 0, 1)',
                    ],
                    borderWidth: 1,
                  },
                ], 
              }                    
            };                                                                                                  
        default:
            return state;
    }    
}