require_relative 'ruby/dom6_pretender_data'

# Set location of source data
pd = Dom6::PretenderData.new("../dom6inspector/gamedata")

# Read it in
pd.read

# Check whether all pretenders have costs
pd.verify("src/data")

# Write nation & pretender information for the bless calculator
pd.export("src/data")



