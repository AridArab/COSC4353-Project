# test_pricingmodule.py
import pytest
from PricingModule import pricingmodule

def test_calculate_price_no_rush_delivery():
    # Instance of PricingModule with default values
    pricing_module = pricingmodule()
    gallons_requested = 100
    is_rush_delivery = False

    # Expected price calculation
    expected_price_per_gallon = 1.50 + (1.50 * 0.04) + (1.50 * 0.03)
    expected_total_price = expected_price_per_gallon * gallons_requested

    # Actual total price
    actual_total_price = pricing_module.calculate_price(gallons_requested, is_rush_delivery)

    assert actual_total_price == expected_total_price

def test_calculate_price_with_rush_delivery():
    pricing_module = pricingmodule()
    gallons_requested = 100
    is_rush_delivery = True

    # Expected price calculation with rush delivery
    expected_price_per_gallon = 1.50 + (1.50 * 0.04) + (1.50 * 0.03)
    rush_delivery_charge = expected_price_per_gallon * 0.10
    expected_price_per_gallon += rush_delivery_charge
    expected_total_price = expected_price_per_gallon * gallons_requested

    # Actual total price
    actual_total_price = pricing_module.calculate_price(gallons_requested, is_rush_delivery)

    assert actual_total_price == expected_total_price

def test_calculate_price_zero_gallons():
    pricing_module = pricingmodule()
    gallons_requested = 0
    is_rush_delivery = False

    expected_total_price = 0  # No gallons requested, should be $0

    actual_total_price = pricing_module.calculate_price(gallons_requested, is_rush_delivery)

    assert actual_total_price == expected_total_price