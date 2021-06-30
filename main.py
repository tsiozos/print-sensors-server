# initialization
radio.set_group(1)
radio.set_transmit_power(7)
radio.send_value("WAKE", 0)

def on_set_interval_mode_control._mode.():
    led.toggle(2, 2)
control.set_interval(on_set_interval_mode_control._mode.,
    1000,
    control.IntervalMode.INTERVAL)

def on_received_string(receivedString):
    pass
radio.on_received_string(on_received_string)

def on_forever():
    pass
basic.forever(on_forever)
