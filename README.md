# Idea-Generation
This is the code for reproducing and potentially creating your own idea generation / divergent thinking / creative thinking experiment.
The JavaScript functions were created following Jess Hamrick's Mental Rotation Experiment, which makes use of STATE and EXPERIMENT objects to enable control of iterations / trials. 

The config.js file contains changeable configurations and the trial.html files contains the div sliders for various instructions. As is, the experiment was used to compare the RT dynamics and response semantics on 3 Alternative Uses prompts to those when participants respond to Consequences prompts. The experiment can be easily extended to collect semantic fluency (a.k.a. free recall from semantic categories) data. 

Currently the prompts are text-only, but images should be easy to add, with paths to the files specified in config.js and updates to the JavaScript functions to enable construction of images (try CANVAS) rather than text nodes.

Please feel free to get in contact with questions, and please use and modify!!

# Data parsing
A script (written in R) used for parsing the data (from MySQL -> R and then with R functions to parse the JSON datastring) is available on OSF https://osf.io/eux2k
