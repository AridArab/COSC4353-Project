class pricingmodule:
 def __init__(self, base_price_per_gallon=1.50):
        self.base_price_per_gallon = base_price_per_gallon

def calculate_price(self, gallons_requested, is_in_state, has_history):
        # Base price adjustments
        location_factor = 0.02 if is_in_state else 0.04
        rate_history_factor = 0.01 if has_history else 0.0
        gallons_requested_factor = 0.02 if gallons_requested > 1000 else 0.03
        company_profit_factor = 0.10  # always 10%

        # Calculate margin
        margin = (location_factor - rate_history_factor + gallons_requested_factor + company_profit_factor) * self.base_price_per_gallon

        # Suggested price per gallon
        suggested_price_per_gallon = self.base_price_per_gallon + margin

        # Calculate total price
        total_price = suggested_price_per_gallon * gallons_requested

        return suggested_price_per_gallon, total_price