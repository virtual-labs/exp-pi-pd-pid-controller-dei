<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=default'></script>

<strong>Theory:</strong> PID controllers use a 3 basic behavior types or modes: P-proportional, I-integrative and D-derivative. While proportional and integrative modes are also used as single control modes, a derivative mode is rarely used on it’s own in control systems. Combinations such as PI and PD control are very often in practical systems. 

<strong>P Controller:</strong> In general it can be said that P controller cannot stabilize higher order processes. For the 1st order processes, meaning the processes with one energy storage, a large increase in gain can be tolerated. Proportional controller can stabilize only 1st order unstable process. Changing controller gain K can change closed loop dynamics. A large controller gain will result in control system with: a) smaller steady state error, i.e. better reference following b) faster dynamics, i.e. broader signal frequency band of the closed loop system and larger sensitivity with respect to measuring noise c) smaller amplitude and phase margin When P controller is used, large gain is needed to improve steady state error. Stable systems do not have problems when large gain is used. Such systems are systems with one energy storage (1st order capacitive systems). If constant steady state error can be accepted with such processes, than P controller can be used. Small steady state errors can be accepted if sensor will give measured value with error or if importance of measured value is not too great anyway. 

<strong>PD Controller:</strong> D mode is used when prediction of the error can improve control or when it necessary to stabilize the system. From the frequency characteristic of D element it can be seen that it has phase lead of 90°. Often derivative is not taken from the error signal but from the system output variable. This is done to avoid effects of the sudden change of the reference input that will cause sudden change in the value of error signal. Sudden change in error signal will cause sudden change in control output. To avoid that it is suitable to design D mode to be proportional to the change of the output variable. PD controller is often used in control of moving objects such are flying and underwater vehicles, ships, rockets etc. One of the reason is in stabilizing effect of PD controller on sudden changes in heading variable y(t). Often a "rate gyro" for velocity measurement is used as sensor of heading change of moving object. 

<strong>PI Controller:</strong> PI controller will eliminate forced oscillations and steady state error resulting in operation of on-off controller and P controller respectively. However, introducing integral mode has a negative effect on speed of the response and overall stability of the system. Thus, PI controller will not increase the speed of response. It can be expected since PI controller does not have means to predict what will happen with the error in near future. This problem can be solved by introducing derivative mode which has ability to predict what will happen with the error in near future and thus to decrease a reaction time of the controller. PI controllers are very often used in industry, especially when speed of the response is not an issue. A control without D mode is used when: a) fast response of the system is not required b) large disturbances and noise are present during operation of the process c) there is only one energy storage in process (capacitive or inductive) d) there are large transport delays in the system. 

<strong>PID Controller:</strong> PID controller has all the necessary dynamics: fast reaction on change of the controller input (D mode), increase in control signal to lead error towards zero (I mode) and suitable action inside control error area to eliminate oscillations (P mode). Derivative mode improves stability of the system and enables increase in gain K and decrease in integral time constant Ti, which increases speed of the controller response. PID controller is used when dealing with higher order capacitive processes (processes with more than one energy storage) when their dynamic is not similar to the dynamics of an integrator (like in many thermal processes). PID controller is often used in industry, but also in the control of mobile objects (course and trajectory following included) when stability and precise reference following are required. Conventional auto pilot is for the most part PID type controllers. 
Effects of Coefficients: 

