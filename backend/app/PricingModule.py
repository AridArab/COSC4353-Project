class pricingmodule:
    def __init__(self, base_price_per_gallon=1.50, location_factor=0.04, rate_fluctuation=0.03):

        self.base_price_per_gallon = base_price_per_gallon
        self.location_factor = location_factor
        self.rate_fluctuation = rate_fluctuation

    def calculate_price(self, gallons_requested, is_rush_delivery):
        # Assume location_factor and rate_fluctuation influence the base price
        price_per_gallon = self.base_price_per_gallon + (self.base_price_per_gallon * self.location_factor) + (self.base_price_per_gallon * self.rate_fluctuation)

        # Apply rush delivery charge if applicable
        if is_rush_delivery:
            rush_delivery_charge = 0.10  # 10% additional charge
            price_per_gallon += price_per_gallon * rush_delivery_charge

        # Calculate total price
        total_price = price_per_gallon * gallons_requested

        return total_price
